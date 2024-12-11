import { motion } from "framer-motion";
import team1 from '../../assets/team/team-1.jpg'
import team2 from '../../assets/team/team-2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <motion.img
                        src={team1}
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 12, repeat: Infinity }}
                        className="max-w-sm rounded-t-[32px] rounded-br-[32px] shadow-2xl border-l-4 border-b-4 border-blue-700" />
                    <motion.img
                        src={team2}
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 12, delay: 6, repeat: Infinity }}
                        className="max-w-sm rounded-t-[32px] rounded-br-[32px] shadow-2xl border-l-4 border-b-4 border-blue-700" />
                </div>
                <div className="flex-1">
                    <motion.h1
                        animate={{ x: 100 }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatDelay: 1
                        }}
                        className="text-5xl font-bold">The <motion.span animate={{ color: ['#ff5733', '#645f5b ', '#65320f '] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-blue-500">Easiest Way </motion.span>
                        to Get Your New Job!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;