import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
  'id': 1,
  'img': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'brithday': '910806',
  'job': '대학생'
},
{
  'id': 2,
  'img': 'https://placeimg.com/64/64/2',
  'name': '이용준',
  'brithday': '910526',
  'job': '사장님'
},
{
  'id': 3,
  'img': 'https://placeimg.com/64/64/3',
  'name': '윤우식',
  'brithday': '910922',
  'job': '프로그래머'
}
]



class App extends Component {
  render() {
    return(
      <div>
        {
          customers.map(c => {
            return(
              <Customer
              key={c.id}
              id={c.id}
              img={c.img}
              name={c.name}
              brithday={c.brithday}
              job={c.job}
              />
            )
          })
        }
      </div>

    );
    }

}

export default App;
