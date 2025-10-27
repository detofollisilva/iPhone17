function Footer() {

    const sections = [
        {
            title: 'Comprar e Saber Mais',
            links: ['iPhone 17 Pro', 'iPhone 17 Pro Max', 'Comparar Modelos', 'Acessórios']
        },
        {
            title: 'Especificações',
            links: ['Características', 'Câmera', 'Bateria', 'Display']
        },
        {
            title: 'Suporte',
            links: ['Suporte ao iPhone', 'AppleCare+', 'iOS 26', 'Contato']
        },
        {
            title: 'Apple',
            links: ['Sobre a Apple', 'Newsroom', 'Privacidade', 'Carreiras']
        },

    ];

    const buttonLinks = ['Política de Privacidade', 'Termos de Uso', 'Vendas'];


    return (
        <footer className="bg-gray-900 border-t border-gray-800 w-full">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-4 gap-8 mb-8 text-center w-full">
                    {sections.map((section, index) => (
                        <div key={index}>
                            <h4 className="font-semibold mb-4">{section.title}</h4>
                            <ul className="space-y-2 text-gray-400">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a href="#" className="hover:text-white cursor-pointer">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="border-t border-gray-800 pt-6 w-full flex justify-between items-center">
                    <div className="flex flex-col">
                        <p className="text-md text-gray-500">© 2023 Apple Inc. Todos os direitos reservados.</p>
                        <p className="text-xs text-gray-500 mt-2">Site criado para treinamento e estudo.</p>
                    </div>
                    <div className="flex gap-6 text-gray-400">
                        {buttonLinks.map((link, index) => (
                            <a href="#" key={index} className="text-gray-400 hover:text-white cursor-pointer">
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;