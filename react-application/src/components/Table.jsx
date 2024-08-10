import myData from '../data/data.json';


const Table = () => {

  
    
      return (
        <div className='table'>
          <h1>Kelime Listesi</h1>
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {myData.map((kelime) => (
                <tr key={kelime.id}>
                  <td>{kelime.id}</td>
                  <td>{kelime.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };
    

export default Table;