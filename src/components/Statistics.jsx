import css from '../components/Statistics.css';

const DataList = ({ data }) => {
    return(
    <ul class="stat-list">
    {data.map(element => (
        <li key={element.id} class="item" style={{
            backgroundColor: '#' + Math.random().toString().slice(3,9)
        }}>
             <span class="label">
                {element.label}
            </span>
            <span class="percentage">
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