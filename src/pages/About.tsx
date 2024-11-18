import { integrantes } from '../data/about'
import cantares from '/img/about/1.jpg'

export default function About() {
  return (
    <div className="bg-mainBg pt-[80px]">
      <div className='contain2 flex-col p-5 '>
        <div className='flex pt-24'>
          <div className='w-[60%] text-white text-justify  px-10 py-5 pr-28'>
            <h2 className='text-4xl text-mainText'>Historia</h2><br />
            <p>
            "Ministro Musical Cantares" nació en el año 2010 dentro de la Iglesia Adventista del Séptimo Día de [Nombre de la Ciudad]. Un grupo de siete jóvenes, con una profunda pasión por alabar a Dios a través de la música, se unieron con el objetivo de llevar el mensaje del amor de Cristo a través de sus voces.
            </p><br />
            <p>Inspirados por la palabra de Dios y movidos por el Espíritu Santo, los miembros fundadores comenzaron a reunirse regularmente para ensayar y perfeccionar su arte musical. Con el tiempo, fueron desarrollando un repertorio de himnos clásicos, cánticos modernos y composiciones propias, todas ellas enfocadas en exaltar el nombre de Jesús.</p><br />
            <p>Desde entonces, "Ministro Musical Cantares" ha tenido el privilegio de ministrar en diversas iglesias, eventos y campañas evangelísticas, llevando el mensaje de esperanza y redención a miles de personas. Su objetivo principal sigue siendo utilizar el don de la música para glorificar a Dios y alcanzar corazones para Su Reino.</p>
          </div>
          <div className='w-[40%]'>
            <figure className='w-full h-full flex justify-center items-center'>
              <img src={cantares} alt="" className='h-[70%] rounded-md'/>
            </figure>
          </div>
        </div>
        <div className='w-full pt-40'>
          <div className='contani2 flex-col'>
            {
              integrantes.map((item, index) => (
                <div 
                  className={`w-full flex ${index % 2 ? 'flex-row-reverse': ''}`}
                  key={item.id}
                >
                  <div className={`w-[50%] text-white text-justify  px-10 py-5 pr-28`}>
                    <figure className='w-full flex justify-center items-center'>
                      <img src={item.imagen} alt="" className='h-[50%] max-h-[450px] rounded-md'/>
                    </figure>
                  </div>
                  <div className='w-[50%]'>
                    <div className='text-white flex flex-col items-start justify-center w-full h-full'>
                      <h2>{item.title}</h2>
                      <p>{item.name}</p><br />
                      <p className='pr-32 text-justify'>{item.description}</p><br />
                      <p>Versículo: {item.versiculo}</p>
                      <p>Himno: {item.himno}</p>
                      <div>
                        <p>Ciudad: {item.ciudad}</p>
                        <p>Iglesia: {item.iglesia}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}