import { jsPDF } from "jspdf";

const rankCertificates: Record<number, string> = {
  1: "/certificates/rank1.png",
  2: "/certificates/rank2.png",
  3: "/certificates/rank3.png",
};

export const downloadCertificatePDF = async (rank: number, name: string) => {
  const date = new Date().toLocaleDateString();
  const certImage = rankCertificates[rank];

  const canvas = await generateCertificateCanvas(certImage, name, date, "rank");
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: [canvas.width, canvas.height],
  });

  pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
  pdf.save(`certificate_${rank}_${name.toUpperCase()}_${date}.pdf`);
};

export const downloadCompletionCertificatePDF = async (userName: string) => {
  const date = new Date().toLocaleDateString();
  const imageUrl = "/certificates/pbw.png";

  const canvas = await generateCertificateCanvas(
    imageUrl,
    userName,
    date,
    "completion"
  );
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: [canvas.width, canvas.height],
  });

  pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
  pdf.save(`completion_certificate_${userName}_${date}.pdf`);
};

export const generateCertificateCanvas = async (
  imageUrl: string,
  name: string,
  date: string,
  type: "rank" | "completion"
): Promise<HTMLCanvasElement> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0);

      // Name styling
      ctx.font = "bold 75px 'Times New Roman', Calibri";
      ctx.fillStyle = "#000";
      ctx.textAlign = "center";
      ctx.fillText(name.toUpperCase(), canvas.width / 2, canvas.height * 0.525);

      if (type === "rank") {
        // Date styling based on certificate type
        ctx.font = "44px 'Arial', sans-serif";
        let formattedDate = "";

        formattedDate = new Date(date).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });
        ctx.fillText(
          formattedDate,
          canvas.width / 2 - 370,
          canvas.height * 0.81
        );
      } else if (type === "completion") {
        // Date styling based on certificate type
        ctx.font = "bold 45px 'Times New Roman', Calibri";

        ctx.fillText(
          `AWARDED ON ${date}`,
          canvas.width / 2,
          canvas.height * 0.875
        );
      }

      resolve(canvas);
    };
    img.src = imageUrl;
  });
};
