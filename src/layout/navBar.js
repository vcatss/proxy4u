export default function() {
    const menu = [
        {
            id:0,
            text: 'Tool',
            slug: '',
            childrens:[

            ]
        },
        {
            id:2,
            text: 'Order',
            slug: '',
            childrens:[

            ]
        },
        {
            id:3,
            text: 'IP v6 Package',
            slug: '',
            childrens:[

            ]
        },
        {
            id:4,
            text: 'Rotating Proxy',
            slug: '',
            childrens:[

            ]
        },
        {
            id:5,
            text: 'Contact',
            slug: '',
            childrens:[

            ]
        }
    ]
    const listMenu = menu.map((item) =>
        <span key={item.id} className="px-4 cursor-pointer">{item.text}</span>
    );

    return(
        <>
            <span className="flex justify-center w-full">
                <div className="container flex items-center w-full text-lg font-semibold">
                    <img src="https://proxyaz.com/templates/default/assets/img/logo.png"/>
                    <div className="flex-grow">
                        <div className="flex">
                            {listMenu} 
                        </div>
                    </div>
                    <div className="flex items-center">
                        <span className="px-2 mr-4 hover:underline cursor-pointer">
                            Login
                        </span>
                        <span className="uppercase text-base bg-green-500 text-white px-4 py-1 rounded-lg cursor-pointer hover:shadow-md">
                            Signup here
                        </span>
                    </div>
                </div>
            </span>
        </>
    )
}