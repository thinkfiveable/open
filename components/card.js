export default function Card(props) {
    return (
        <div>
            <img
                src="https://og-cards.vercel.app/Lorem%20Ipsum.png?theme=light&md=1&fontSize=225px&caption=A%2520website."
                className="rounded-xl h-40 w-52"
            />
            <div className="flex flex-row">
                <div className="flex flex-col ">
                    <h2 className="font-rubik">Lorem ipsum</h2>
                    <div className="flex flex-row">
                        <p>Sarthak Mohanty • Website</p>
                    </div>
                </div>
                <img
                    src="https://sarthakmohanty.me/sarthak.jpg"
                    className="rounded-full h-12 w-12 float-right"
                />
            </div>
        </div>
    );
}
