import Parts from "./parts";
import Yamada from "./../images/yamada.svg"
const Main = () => {
    const datas = [
        { image: "", title: "  趣味は運動です。", content: ` 趣味は運動です,\n今はコロナであまり集まれて出来ていませんが,\n昔は月に２．３回ほど友達と集まり   \nサッカーとバトミントンをしていました。`},
        { image: "", title: "", content: "" ,},
        { image: "", title: "", content: "" }
    ];

    return (
        <div>
            {datas.map((data) => {
                return (
                    <Parts image={Yamada} title={data.title} content={data.content} />
                )
            })}
        </div>
    );

};
export default Main;