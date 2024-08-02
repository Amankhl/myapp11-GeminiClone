import { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = ({isMenuClicked}) => {
    const {onSent, recentPrompt, showResult,loading, resultData, setInput, input} = useContext(Context)

  return (
    <div className='min-h-[100svh] pb-[15vh] flex-1 relative'>
        <div className='text-[22px] p-[20px] text-[#585858] flex justify-between items-center'>
            Gemini
            <button>
                <img src={assets.user_icon} alt="" className='w-[40px] rounded-[50%] '/>
            </button>
        </div>
        {/* ************************ */}

        <div className='max-w-[900px] m-auto'>
        {!showResult 
        ?<>
        <div className='p-[20px] leading-[4rem] text-[#c3c4c4] my-[50px]'>
            <h1 className='text-[56px] font-[500]'>
                <span className='font-outfit bg-gradient-to-r from-[#5382EC] via-[#9F71C5] to-[#D46677] text-transparent bg-clip-text'>Hello, Aman</span><br />
                How can I help you today?
            </h1>
        </div>
        {/* ************************ */}
        <div className='cards grid gap-[15px] p-[20px] text-[#606060] text-[17.5px]'>
            <div className='suggestion_box relative'>
                <p>Help me incorporate more plant-based options in my diet</p>
                <img src={assets.compass_icon} alt="" className=' rounded-[20px] w-[35px]  bg-white p-[5px] absolute right-[10px] bottom-[10px]'/>
            </div>
            <div className='suggestion_box relative'>
                <p>Explain how something works like an engineer</p>
                <img src={assets.bulb_icon} alt="" className=' rounded-[20px] w-[35px]  bg-white p-[5px] absolute right-[10px] bottom-[10px]'/>
            </div>
            <div className='suggestion_box relative'>
                <p>Write a thank you note to my colleague</p>
                <img src={assets.code_icon} alt="" className=' rounded-[20px] w-[35px]  bg-white p-[5px] absolute right-[10px] bottom-[10px]'/>
            </div>
            <div className='suggestion_box relative'>
                <p>Give me a quick walkthrough of The Byzantine Empire</p>
                <img src={assets.gallery_icon2} alt="" className='rounded-[20px] w-[35px] bg-white p-[5px] absolute right-[10px] bottom-[10px]'/>
            </div>
        </div>
        </>
        : 
        <div className='py-[0px] px-[5%] max-h-[70svh] overflow-y-scroll scrollbar-hide'>
            <div className='my-[40px] flex items-center gap-5'>
                <img src={assets.user_icon} alt="" className='w-10 rounded-[50%]'/>
                <p>{recentPrompt}</p>
            </div>
            <div className='flex items-start gap-5'>
                <img src={assets.gemini_icon} alt="" className='w-10'/>
                {loading ? 
                <div className='w-[100%] flex flex-col gap-[10px] loader-div'>
                    <hr className='rounded-[4px] border-none bg-[#f6f78] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] h-5  ' />
                    <hr className='rounded-[4px] border-none bg-[#f6f78] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] h-5  ' />
                    <hr className='rounded-[4px] border-none bg-[#f6f78] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] h-5  ' />
                </div> 
                : 
                <p className='text-[17px] font-[300] leading-[1.8]' > {resultData}  </p>
            }
            </div>
        </div>
        }
        {/* ************************ */}
        <div className='absolute bottom-0 w-[100%] max-w-[900px] px-[20px] m-auto'>
        <div className='flex flex-row justify-between items-center bg-[#F0F4F9] rounded-full py-[15px] px-[20px]'>
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' className='bg-transparent border-none flex-1 focus:outline-none text-base p-[8px] text-[18px]'/>
            <div className='flex items-center gap-[15px]'>
                <img src={assets.gallery_icon} alt="" className='w-6 cursor-pointer'/>
                <img src={assets.mic_icon} alt="" className='w-7 cursor-pointer'/>
                <img onClick={()=>onSent()} src={assets.send_icon} alt="" className='w-7 cursor-pointer'/>
            </div>
        </div>
            <p className='text-[13px] text-[#838484] text-center my-[15px] mx-[auto] font-[300]'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
        </div>
        </div>
    </div>

)
}

export default Main