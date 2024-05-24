'use client'

import { useEffect } from "react";
import './UserCard.css'

export default function UserCard({
  userObj,
}: {
  userObj: { id: number, name: string; phone: string; age: string; email: string }
}) {

  useEffect(() => {
    const popup = document.querySelector(`#popup_${userObj.id}`)
    const trigger = document.querySelector(`#trigger_${userObj.id}`)
    const closer = document.querySelector(`#closer_${userObj.id}`)

    trigger?.addEventListener('click', (e) => {
      popup?.classList.add('active')
      document.body.classList.add('lock-scroll')
    })

    popup?.addEventListener('click', function (e) {
      if(popup.classList.contains('active') && e.target === popup) {
        popup.classList.remove('active')
        document.body.classList.remove('lock-scroll')
      }
    })

    closer?.addEventListener('click', (e) => {
      popup?.classList.remove('active')
      document.body.classList.remove('lock-scroll')
    })

  })
  
  return (
    <>
      <div
        style={{ boxShadow: '0 0 20px #0000001A' }}
        className="h-[300px] rounded-2xl p-6"
        id={`trigger_${userObj.id}`}
      >
        <h3 className="mb-6 text-2xl text-[#262C40]">{userObj.name}</h3>
        <div>
          <p className="flex justify-start items-center gap-5 mb-3.5 text-sm text-[#8189A3]">
            {' '}
            <span className="">
              <img src="/phone.svg" alt="phone icon" />
            </span>{' '}
            {userObj.phone}
          </p>
          <p className="flex justify-start items-center gap-5 text-sm text-[#8189A3]">
            {' '}
            <img src="/envelope.svg" alt="envelope icon" /> {userObj.email}
          </p>
        </div>
      </div>

      {/* pop-up */}
      <div id={`popup_${userObj.id}`} className="popup hidden justify-center items-center fixed w-full h-full bg-[#00000017] top-0 left-0">
        <div className="popup-box relative w-[500px] h-[468px] p-6 bg-white rounded-2xl">
          <h3 className="mb-10 text-2xl">{userObj.name}</h3>
          <div className="flex justify-between gap-10">
            <div className="flex-grow text-base">
              <p className="mb-3.5">Телефон:</p>
              <p className="mb-3.5">Почта:</p>
              <p className="mb-3.5">Дата приема:</p>
              <p className="mb-3.5">Должность:</p>
              <p className="mb-3.5">Подразделение:</p>
            </div>
            <div className="flex-grow-[3] text-[#8189A3] text-sm">
              <p className="mb-4">{userObj.phone}</p>
              <p className="mb-4">{userObj.email}</p>
              <p className="mb-4">15.10.2020</p>
              <p className="mb-4">Дизайнер</p>
              <p className="mb-4">Трайб автоматизированных систем контактных центров</p>
            </div>
          </div>
          <div>
            <h4>Дополнительная информация</h4>
            <p>Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.</p>
          </div>
          <span id={`closer_${userObj.id}`} className="absolute right-4 top-4 hover:cursor-pointer"><img src="/x.svg" alt="x mark" /></span>
        </div>
      </div>
    </>
  )
}
