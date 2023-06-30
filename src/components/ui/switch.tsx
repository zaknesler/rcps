type SwitchProps = {
  checked: boolean
  onChange: (checked: boolean) => void
}

export const Switch: React.FC<SwitchProps> = ({ checked, onChange }) => (
  <button
    className="text-sm font-normal"
    onClick={() => onChange(!checked)}
    aria-label={checked ? 'Collapse' : 'Expand'}
    title={checked ? 'Collapse' : 'Expand'}
  >
    {checked ? '[-]' : '[+]'}
  </button>
)
