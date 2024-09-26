import React from 'react'
import './Style.css'
import agentLeft from '../assets/agentArrowLeft.svg'
import superAgent from '../assets/superAgent.svg'
import ambassedors from '../assets/ambassedors.svg'
import user1 from '../assets/Avatar1.svg'
import user2 from '../assets/Avatar2.svg'
import user3 from '../assets/Avatar3.svg'
import user4 from '../assets/Avatar4.svg'
import outArrow from '../assets/Arrow outward.svg'
import agentRight from '../assets/agentArrowRight.svg'
import activeClients from '../assets/activeClients.svg'


const HomePage = () => {
  const users = [
    {id:1, icon: user1},
    {id:2, icon: user2},
    {id:3, icon: user3},
    {id:4, icon: user4},
  ];
  return (
    <div>
      <section className='hero'>
        <div className='agents'>
          <img className='super-Agent' src={superAgent} alt="" />
          <img className='agent-Left' src={agentLeft} alt="" />
        </div>
        <div className='head'>
          <div className='heading'>
            <h1 className='head-One'>Digitally Empowering Sales <br /> Agents, Everywhere!</h1>
            <p className='p-TagOne'>Join our Agent Networks System (ANS) to unlock new opportunities and grow your 
                <br />Influence in a vast, thriving market
            </p>
          </div>
          <div className='btnAgent'>
            <Button text="Become an Agent Today"/>
            <ButtonTwo text="Learn More"/>
          </div>
        </div>  
        <div className='agents'>
          <img className='agent-Right' src={agentRight} alt="" />
          <img className='ambassedor' src={ambassedors} alt="" />
        </div>
        <div className='active-Clients'>
          <div>
            {users.map((user, index) =>(
              <UserImage 
             key={index}
              users={user.icon}/>
            ))}
          </div>
          <img src={activeClients} alt="" />
        </div>
      </section>
    </div>
  )
};

//Components

const UserImage = ({users}) => (
  <div className='avatars'>
    <img src={users} alt="User Avatar" />
  </div>
);

const Button = ({text, onClick}) =>(
  <div className='btn'>
    <button type='button' onClick={onClick}>
      {text}
    </button>
  </div>
);

const ButtonTwo = ({text, onClick}) =>(
  <div className='learnMore'>
    <button type='button' onClick={onClick}>
      {text}
    </button>
    <img src={outArrow} alt="" />
  </div>
)

export default HomePage