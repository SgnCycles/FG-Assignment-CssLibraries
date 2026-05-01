import type { ButtonType } from './types.ts'

const Button = ({click, icon}:ButtonType) => {
  return (
    <div className="button relative flex items-center justify-center cursor-pointer rounded-2xl bg-secondary h-(--button-size) w-(--button-size) shadow-(--button-shadow) before:content-none before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:h-full before:w-full before:ml-(--button-before-margin) before:mt-(--button-before-margin) before:bg-button-secondary before:opacity-[.2]" onClick={click}>
      <span className="circle absolute block rounded-full bg-button-primary h-(--circle-size) w-(--circle-size) ml-(--circle-margin) mt-(--circle-margin) shadow-(--circle-shadow) top-1/2 left-1/2"></span>
      <div className="label flex items-center justify-center absolute h-full w-full opacity-[.8]"><img className="h-8 w-auto" src={icon} height={10}></img>
      </div>
    </div>
  )
}

export default Button