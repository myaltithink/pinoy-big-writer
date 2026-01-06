import { Link } from "react-router-dom";
import { motion } from "framer-motion"

interface Practices {
  title: string,
  bgColor: string,
  textColor: string,
  icon: string
}

const iconBase = "/practice_station/";
const destinationBase = "/practice/"
const practices: Practices[] = [
  {
      title: "Content",
      bgColor: "#b8eed5",
      textColor: "rgb(53 117 88)",
      icon: iconBase + "content.png"
  }, {
      title: "Organization",
      bgColor: "#f4dbdb",
      textColor: "#9d4854",
      icon: iconBase + "organization.png"
  }, {
      title: "Vocabulary",
      bgColor: "#f6ea66",
      textColor: "#854f0e",
      icon: iconBase + "vocabulary.png"
  }, {
      title: "Grammar",
      bgColor: "#b3e6f2",
      textColor: "#2798b4",
      icon: iconBase + "grammar.png"
  }, {
      title: "Mechanics",
      bgColor: "#d88279",
      textColor: "#550c09",
      icon: iconBase + "mechanics.png"
  }
]

const PracticeStation = () => {

    return(
        <div className="flex justify-around items-center w-[100%] h-[80%]">
            {practices.map((item, idx) => (
                <motion.div
                    key={idx} 
                    className="rounded-2xl pe-5 ps-5 flex justify-center items-center h-[100%]" style={{ backgroundColor: item.bgColor }}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        duration: 0.5,
                        delay: idx * 0.1
                    }}>
                    <Link to={`${destinationBase}${item.title.toLowerCase()}`}>
                        <div>
                            <div className="flex justify-center">
                                <img src={item.icon} alt={`${item.title} icon`} width={100}/>
                            </div>
                            <p className="text-center" style={{ fontFamily: "Arco", color: item.textColor }}>{item.title}</p>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    )
}


export default PracticeStation;
