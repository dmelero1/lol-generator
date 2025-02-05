interface ButtonProps {
    text: string;    
    onClickHandler: () => void;
}

function Button({text, onClickHandler}: ButtonProps) {
  return (
    <div>
      <button className='button' onClick={onClickHandler}>{text}</button>
    </div>
  )
}

export default Button
