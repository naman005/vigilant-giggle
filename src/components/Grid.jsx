import Card from "./Card"

const Grid = () => {
    return (
        <div className="grid grid-cols-2 gap-6 p-3 h-screen w-screen bg-gradient-to-b from-blue-400 to-white">
            <div className="flex flex-col justify-center gap-8 py-4">
                <div className="h-1/3">
                    <Card title="index.html"/> 
                </div>
                <div className="h-2/3">
                    <Card title="style.css"/>
                </div>
            </div>
            <div className="flex flex-col-reverse justify-center gap-8 py-4">
                <div className="h-1/3">
                    <Card title="Tailwind CSS" /> 
                </div>
                <div className="h-2/3">
                    <Card title="Output" />
                </div>
            </div>
        </div>
    )
}

export default Grid