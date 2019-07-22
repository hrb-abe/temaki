import * as Enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import * as ContextHook from 'babel-plugin-require-context-hook/register'

Enzyme.configure({ adapter: new Adapter() })
ContextHook()
