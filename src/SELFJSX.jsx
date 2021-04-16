export function createElement(type,props,...child) {
    console.log(arguments);
    console.log(child);
    console.log('dddd');
    let jsxObj = {
        type,
        ref:null,
        key:null,
        props:{}
    }
    if (props) {
        if (props.hasOwnProperty('key')) {
            jsxObj.key = props.key;
            delete props.key;
        }
        if (props.hasOwnProperty('ref')) {
            jsxObj.ref = props.ref;
            delete props.ref
        }      
        jsxObj.props = Object.assign(jsxObj.props,props); 
    }
    if (child.length>0) {
        if (child.length===1) {
            jsxObj.props.children = child[0]
            console.log(jsxObj);
            
        }else{
            jsxObj.props.children = child
            console.log(child);
        }
        
    }
    console.log(jsxObj);
    return jsxObj;
}
