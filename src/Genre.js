import  data from './data/data.json'

function Genre({ id }) {
    const genre = data.genres[id]
    return (
        <div>
            { genre }
        </div>
    );
}

export default Genre;