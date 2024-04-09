import { Button } from '../button/Button.jsx'

export function AddMoreButton({ onClick }) {


  return (
    <div>
      <Button onClick={onClick}>Click to load more</Button>
    </div>
  )
}
