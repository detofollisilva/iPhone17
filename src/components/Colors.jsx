import { useState } from 'react';

function Colors() {
    const colors = [
        { id: 'blue', name: 'Tiânio Azul', image: '/img/iphone-blue.jpg', colorClass: 'bg-blue-500' },
        { id: 'silver', name: 'Titânio Natural', image: '/img/iphone-silver.jpg', colorClass: 'bg-gray-300' },
        { id: 'orange', name: 'Titânio Laranja', image: '/img/iphone-orange.jpg', colorClass: 'bg-orange-500' }
    ];

    const models = [
        { name: 'Pro Max', screen: '6.9 polegadas', storage: '256GB, 512GB, 1TB', baterry: 'Até 33 horas de vídeo', weigth: '238 gramas' },
        { name: 'Pro', screen: '6.3 polegadas', storage: '128GB, 256GB, 512GB, 1TB', baterry: 'Até 29 horas de vídeo', weigth: '199 gramas' }
    ];

    const [selectedColor, setSelectedColor] = useState('blue'); //sumiu aqui as coisas.



    return (
        <section id="colors" className="bg-black py-20 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl mb:text-6xl font-bold mb:4">Escolha sua cor</h2>
                    <p className="text-xl text-gray-400">Acabamentos em titânio lindos</p>
                </div>

                <div className='display-flex justify-center mb-12'>
                    <div className='relative w-full max-w-3xl '>
                        <div className='relative flex items-center justify-center min-h[500px]'>
                            <img src={colors.find(color => color.id === selectedColor).image} alt="iPhone Color" className="max-w-full max-h[600px] mx-auto" />
                        </div>

                        <div className='absolute bottom-8 left-0 right-0 text-center'>
                            <div className='px-8 py-4 rounded-full backdrop-blur-md bg-black/40'>
                                <h3 className='text-2xl font-semibold' >{colors.find(color => color.id === selectedColor).name}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center items-center gap-8'>
                    {colors.map(color => (
                        <button
                            key={color.id}
                            onClick={() => setSelectedColor(color.id)}
                            className={` relative transition-all duration-300 w-16 h-16 rounded-full cursor-pointer  ${color.colorClass} ${selectedColor === color.id ? 'ring-2 ring-offset-2 ring-offset-black ring-white ' : ''}`}
                        ></button>))}
                </div>

                <div className='grid gap-8 mt-20 grid-cols-2'>
                    {models.map((modelo, index) => (
                        <div key={index} className="bg-gradient-to-br from-gray-900 to-transparent rounded-3xl p-8 border-gray-900">
                            <div className='text-4xl mb-4'>📱</div>
                            <h3 className="text-3xl font-bold mb-4">{modelo.name}</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li><span className="font-semibold">Tela:</span> {modelo.screen}</li>
                                <li><span className="font-semibold">Armazenamento:</span> {modelo.storage}</li>
                                <li><span className="font-semibold">Bateria:</span> {modelo.baterry}</li>
                                <li><span className="font-semibold">Peso:</span> {modelo.weigth}</li>
                            </ul>
                        </div>
                    ))}
                </div>

                <div className='text-center mt-16'>
                    <button className='bg-blue-700 hover:bg-blue-800 text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50 cursor-pointer'>
                        Compre agora a partir de R$ 9.999,00
                    </button>
                    <p> Ou em até 12x sem JUROS</p>
                </div>

            </div>
        </section>
    )
}
export default Colors;