import * as React from 'react'
import { useAppSelector } from '../../../redux/Store/store'
import './style.scss'
import CodeEditor from '@uiw/react-textarea-code-editor'

function Codeout() {
    const btnData = useAppSelector(state => state.buttonText)
    const btnSh = useAppSelector(state => state.buttonShadow)
    const [stylee, setstylee] = React.useState(`function add(a, b) {\n  return a + b;\n}`)
    React.useEffect(() => {
        const style: any = document.getElementById("newBtn")?.getAttribute('style')
        setstylee(style)
    }, [btnData, btnSh])
    return (
        <div className='code-section'>
            <CodeEditor
                value={stylee}
                language="scss"
                placeholder="Please enter Css code."
                padding={15}
                style={{
                    fontSize: 13,
                    backgroundColor: "#f5f5f5",
                }}

            />

        </div>

    )
}

export default Codeout
