interface ISocialInfo {
    items: IInfos[]
}

interface IInfos {
    name: string;
    link: string;

}
export default function List({ items }: ISocialInfo) {
    return (
        <ul>
            {
                items.map((item, index) =>

                    <li key={index}>
                        <a href={item.link}>
                            {item.name} 
                        </a>
                    </li>
                )
            }
        </ul>
    )
}