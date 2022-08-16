import Parts from "./parts";
import Yamada from "./../images/yamada.svg"
import Img from "./../images/IMG_2299.svg"
const Main = () => {
    const datas = [
        { id: "1", image: "", title: "趣味.特技", content: ` 趣味は運動です,\n今はコロナであまり集まれて出来ていませんが,\n昔は月に２．３回ほど友達と集まり   \nサッカーとバトミントンをしていました。` },
        { id: "2", image: "", title: "資格", content: "普通自動車免許\nフォークリフト" },
        { id: "3", image: "", title: "応募理由", content: "パソコンは今まであんまり触ってはきていませんが\n友達と勉強をして楽しさと深さを知って\nこの道に行きたい思いました" },

    ];

    return (
        <div>
            <a href="#2">koko</a>
            <div>
                {datas.map((data) => {
                    return (
                        <Parts anchor={data.id} image={Img} title={data.title} content={data.content} />
                    )
                })}
                <p>プロゲートを自分でやりながら<br></br>
                    簡単ですが作ってみました。
                </p>
            </div>
        </div>
    );

};
export default Main;