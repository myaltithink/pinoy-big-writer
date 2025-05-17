import { jsPDF } from "jspdf";

const rankCertificates: Record<number, string> = {
  1: "/certificates/rank1.png",
  2: "/certificates/rank2.png",
  3: "/certificates/rank3.png",
};

export const downloadCertificatePDF = async (rank: number, name: string) => {
  const date = new Date().toLocaleDateString();
  const certImage = rankCertificates[rank];

  const canvas = await generateCertificateCanvas(certImage, name, date);
  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: [canvas.width, canvas.height],
  });

  pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
  pdf.save(`certificate_${rank}_${name.toUpperCase()}_${date}.pdf`);
};

export const generateCertificateCanvas = async (
  imageUrl: string,
  name: string,
  date: string
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

      // Customize text
      ctx.font = "bold 75px 'Times New Roman', Calibri"; // Use a web-safe font or load custom
      ctx.fillStyle = "#000";
      ctx.textAlign = "center";

      // Adjust position based on your certificate layout
      ctx.fillText(name.toUpperCase(), canvas.width / 2, canvas.height * 0.555);
      ctx.font = "bold 45px 'Times New Roman', Calibri";
      ctx.fillText(
        `AWARDED ON ${date}`,
        canvas.width / 2,
        canvas.height * 0.875
      );

      resolve(canvas);
    };
    img.src = imageUrl;
  });
};
