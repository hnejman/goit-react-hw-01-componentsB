import styles from './Statistics.module.css';

const DataList = ({ data }) => {
    return(
    <ul className="stat-list">
    {data.map(element => (
        <li key={element.id} className="item" style={{
            backgroundColor: '#' + Math.random().toString().slice(3,9)
        }}>
             <span className="label">
                {element.label}
            </span>
            <span className="percentage">
                {element.percentage}%
            </span> 
        </li>
    ))}
    </ul>)
}

export const Statistics = ({ title, stats }) => (
    <section className='statistics'>
        {{ title } && (<h2>{title}</h2>)}
        <DataList data={stats}/>
    </section>
);