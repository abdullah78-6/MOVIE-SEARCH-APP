import { useContext } from "react";
import { Helper } from "../../store/store";

function Detail(){
    const {data,img}=useContext(Helper);
            return <div className="flex justify-center items-center flex-wrap gap-17 mt-10 min-h-screen ">
                    <div>
                        <img src={img} alt={data} className="rounded-4xl w-50"/>
                        </div>              
                <div className="flex items-center justify-center  flex-wrap md:flex-0 xl:flex-0 lg:flex-0 text-center">
                    <h1 className="text-2xl md:text-4xl lg:text-4xl xl:text-4xl  text-red-600 capitalize ">{data}</h1>
                    <p className="mt-15 w-70 md:w-150 xl:w-260 lg:w-240  text-sm md:text-3xl lg:text-3xl xl:text-3xl  text-cyan-600 capitalize" > 
                        In a world where technology controls emotions, a rebellious dancer from Mumbai, a rogue scientist from Los Angeles, and a fearless cop from Hyderabad unite to restore humanity’s lost ability to feel. Their journey crosses continents — from the neon skylines of LA to the crowded streets of India — blending pulse-pounding Hollywood-style action with Tollywood’s gravity-defying stunts and Bollywood’s heart-thumping musical numbers.

Love blooms amidst chaos, family bonds are tested in melodramatic style, and every explosion is followed by an epic slow-motion walk with background music that gives you goosebumps. The climax? A high-octane showdown atop a futuristic skyscraper — just before everyone breaks into a final dance celebrating the triumph of love, emotion, and cinematic madness.
                    </p>
                    </div>
                
                
            </div>

}
export default Detail;