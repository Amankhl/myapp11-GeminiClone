import { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Sidebar = ({isMenuClicked, handleMenu}) => {

    const {onSent, prevPrompts, setRecentPrompt, newChat} = useContext(Context)

    const loadPrompt = async(prompt)=>{
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

  return (
    <>
    {!isMenuClicked ? (
        <div className='bg-[#f0f4f9] h-[100svh] w-[20%] flex flex-col pt-4 px-4 justify-between'>
        <div className='space-y-5'>
            <button className='p-3 hover:bg-[#E5EAF1] rounded-full' onClick={handleMenu}>
                <img className='w-6' src={assets.menu_icon} alt="Menu icon" />
                </button>
        <button onClick={()=>newChat()} className='flex flex-row items-center gap-4 rounded-full w-[8rem] p-2 bg-[#E5EAF1] hover:bg-[#d7d7da] text-[#737474] '>
            <img src={assets.plus_icon} alt="" className='w-4 '/>
            New chat
        </button>
{/* *******************Mid thing********************************* */}
        <div className='my-3 flex flex-col recent'>
            <h3 className='mb-[5px]'>Recent</h3>
            {prevPrompts.map((item,index)=>{
                return (
            <div key={index} onClick={()=>{loadPrompt(item)}} className='flex items-start gap-[10px] p-[10px] pr-[40px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#E5EAF1]'>
                <img src={assets.message_icon} alt="" className='w-5'/>
                <p>{item.slice(0,18)} ...</p>
            </div>
                )
            })}
        </div>
    </div>
 {/* ******************last buttons *************************** */}
        <div className='flex flex-col mb-3'>
            <button className='utility_btn'>
                <img src={assets.question_icon} alt="Help icon" className='w-5'/>
                Help
            </button>
            <button className='utility_btn'>
                <img src={assets.history_icon} alt="Activity icon" className='w-5' />
                Activity
            </button>
            <button className='utility_btn'>
                <img src={assets.setting_icon} alt="Settings icon" className='w-5'/>
                Settings
            </button>
        </div>
    </div>
) : (
    <div className='bg-[#f0f4f9] h-[100svh] w-[5%] flex flex-col pt-4 px-4 justify-between'>
        <div className='space-y-5 flex flex-col items-center'>
            <button className='p-3 hover:bg-[#E5EAF1] rounded-full' onClick={handleMenu}>
                <img className='w-6' src={assets.menu_icon} alt="Menu icon" />
                </button>
        <button className='rounded-full px-3 py-2 bg-[#E5EAF1] hover:bg-[#d7d7da] text-[#737474] '>
            <img src={assets.plus_icon} alt="" className='w-4 '/>
        </button>
        </div>
 {/* ******************last buttons *************************** */}
        <div className='flex flex-col mb-3'>
            <button className='utility_btn py-3'>
                <img src={assets.question_icon} alt="Help icon" className='w-5' />
            </button>
            <button className='utility_btn py-3'>
                <img src={assets.history_icon} alt="Activity icon" className='w-5' />
            </button>
            <button className='utility_btn py-3'>
                <img src={assets.setting_icon} alt="Settings icon" className='w-5'/>
            </button>
        </div>
    </div>
)}
</>
  )
}

export default Sidebar