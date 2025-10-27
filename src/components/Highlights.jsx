function Highlights() {

    return (
        <section className="bg-black py-20 px-6" id="design">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4"> Design revolucionário</h2>
                    <p className="text-xl text-gray-400">Cada detalhe foi pensado para criar a melhor experiência</p>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-16">
                    <div className="bg-gray-900 rounded-3xl p-8">
                        <img className="w-full rounded-2xl mb-4" src="../public/img/titanium-design.jpg" alt="telefones"></img>
                        <h3 className=" mb-2 text-3xl font-normal text-gradient">Titanium Premium</h3>
                        <p className="text-gray-400 font-medium">Estrutura em titâneo de grau aeroespacial. O smartphone mais leve e forte.</p>
                    </div>

                    <div className="bg-gray-900 rounded-3xl p-8">
                        <img className="w-full rounded-2xl mb-4" src="../public/img/ios-features.jpg" alt="telefones 2025"></img>
                        <h3 className=" mb-2 text-3xl font-normal text-gradient">iOS 26</h3>
                        <p className="text-gray-400 font-medium">O sistema operacional com IA integrada mais avançado do mundo.</p>
                    </div>
                </div>

                <div className="bg-gray-900 rounded-3xl p-12 mb-16" id="performance">
                    <h3 className="text-4xl font-bold mb-6 text-gradient">A18 Pro</h3>
                    <p className="text-gray-400 mb-6"> O Chip mais poderoso em um SMARTPHONE</p>
                    <img className="w-full rounded-2xl mb-4" src="../public/img/chip-a18-pro.jpg" alt="A-18"></img>

                    <ul className="space-y-2  text-gray-300">
                        <li>CPU 20% mais rápida</li>
                        <li>GPU 25% mais eficiente</li>
                        <li>Neural Engine com 16 núcleos</li>
                        <li>Ray tracing acelerador por hardware</li>
                    </ul>
                </div>

                <div id="camera" className="text-center">
                    <h3 className="text-4xl font-bold mb-10" > Sistema de câmera PRO avançado</h3>

                    <div className="grid grid-cols-3 gap-6">

                        <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 transform transition-transform duration-300 cursor-pointer">   
                        <div className="text-4xl font-bold text-blue-600 mb-4">48M</div>
                        <h4 className="text-xl font-normal mb-2">Principal</h4>
                        <p className="text-gray-400">Sensor quad-pixel com foco automático</p>
                    </div>

                    <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 transform transition-transform duration-300 cursor-pointer">
                        <div className="text-4xl font-bold text-orange-500 mb-4">12MP</div>
                        <h4 className="text-xl font-normal mb-2">Ultra wide</h4>
                        <p className="text-gray-400">Campo de visão de 120° com modo noturno</p>
                    </div>

                    <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 transform transition-transform duration-300 cursor-pointer">
                        <div className="text-4xl font-bold text-blue-600 mb-4">12MP</div>
                        <h4 className="text-xl font-normal mb-2">Telefone 5x</h4>
                        <p className="text-gray-400">Zoom óptico de 5x com estabilização</p>
                    </div>
                </div>
                </div>


            </div>
        </section>

    )
}
export default Highlights;