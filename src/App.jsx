import {Container, Content, Row, Column} from './styles'
import Input from './components/Input'
import Button from './components/Button'
import {useState} from 'react'

function App() {
  const [currentNumber, setCurrentNumer] = useState('0')
  const [firtsNumber, setFirstNumber] = useState('0');
  const [operator, setOperator] = useState('');
  
  const handleOnClear = () => {
    setCurrentNumer('0');
    setFirstNumber('0');
  }

  const handleAddNumber = (number) => {
    setCurrentNumer(prev => `${prev === '0' ? '' : prev}${number}`)	
  }

  const handleSumNumbers = () => {
    if(firtsNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumer('0')
      setOperator('+')
    }else{
      const sum = Number(firtsNumber) + Number(currentNumber);
      setCurrentNumer(String(sum));
      setOperator('')
    }
  }

  const handleSubNumbers = () => {
    if(firtsNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumer('0')
      setOperator('-')
    }else{
      const sub = Number(firtsNumber) - Number(currentNumber);
      setCurrentNumer(String(sub));
      setOperator('')
    }
  }

  const handleDivNumbers = () => {
    if(firtsNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumer('0')
      setOperator('/')
    }else{
      const div = Number(firtsNumber) / Number(currentNumber);
      setCurrentNumer(String(div));
      setOperator('')
    }
  }

  const handleMultNumbers = () => {
    if(firtsNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumer('0')
      setOperator('x')
    }else{
      const mult = Number(firtsNumber) * Number(currentNumber);
      setCurrentNumer(String(mult));
      setOperator('')
    }
  }

  const handlePerNumbers = () => {
    if(firtsNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumer('0')
      setOperator('%')
    }else{
      const per = Number(firtsNumber) % Number(currentNumber);
      setCurrentNumer(String(per));
      setOperator('')
    }
  }

  const handleEquals = () => {
    if(!firtsNumber !== '0' && operator !== ''  && currentNumber !== '0'){
      switch(operator){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleSubNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;
        case 'x':
          handleMultNumbers();
          break;
        case '%':
          handlePerNumbers();
          break;
        default:
          // alert("Se liga irmão, não temos essa operação ainda!")
          break;
      }
    }
  }
  
  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button  label="Cl" onClick={() => handleAddNumber('X')}/>
          <Button label="C" onClick={handleOnClear}/>
          <Button label="%" onClick={handlePerNumbers}></Button>
          <Button label="/" onClick={handleDivNumbers}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="x" onClick={handleMultNumbers}/>
        </Row>
        <Row>
          <Button  label="4" onClick={() => handleAddNumber('4')}/>
          <Button  label="5" onClick={() => handleAddNumber('5')}/>
          <Button  label="6" onClick={() => handleAddNumber('6')}/>
          <Button  label="-" onClick={handleSubNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button  label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="‎ "/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="‎ "/>
          <Button  label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  )
}

export default App
