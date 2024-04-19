import { IconReact, IconVue, IconAngular } from './Icons'

export const IconManager = ({ icon, classCustom }) => {
  function renderIcon(icon) {
    switch (icon) {
      case 'react':
        return <IconReact classCustom={classCustom} />
      case 'vue':
        return <IconVue classCustom={classCustom} />
      case 'angular':
        return <IconAngular classCustom={classCustom} />
      default:
        return <IconReact classCustom={classCustom} />
    }
  }

  return renderIcon(icon)
}
