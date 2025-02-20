import Card from "./Card"

const Grid = () => {
    return (
        <div className="grid grid-cols-2 gap-4 p-2 h-screen w-screen">
            <div className="flex flex-col justify-center gap-2 py-2 clay">
                <div className="h-1/3">
                    <Card title="index.html"/> 
                </div>
                <div className="h-2/3">
                    <Card title="style.css"/>
                </div>
            </div>
            <div className="flex flex-col-reverse justify-center gap-2 py-2 clay">
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