import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const DataList = ({ data }) => {
    return(
    <ul className={styles.statList}>
    {data.map(element => (
        <li key={element.id} className={styles.item} style={{
            backgroundColor: '#' + Math.random().toString().slice(3,9)
        }}>
             <span className={styles.label}>
                {element.label}
            </span>
            <span className={styles.percentage}>
                {element.percentage}%
            </span> 
        </li>
    ))}
    </ul>)
}

DataList.propTypes = {
    data:PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    )
}

export const Statistics = ({ title, stats }) => (
    <section className={styles.statistics}>
        {{ title } && (<h2 className={styles.title}>{title}</h2>)}
        <DataList data={stats}/>
    </section>
);

Statistics.propTypes = {
    title:PropTypes.string.isRequired,
    data:PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    )
}