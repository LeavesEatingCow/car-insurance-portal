import FormItem from "./FormItem";
import {useState, useEffect} from "react";

const QuoteRequestForm = (props) => {
  const [response, setResponse] = useState({index: props.step});

  useEffect(() => {
    if (Object.keys(response).length > 1) {
      props.onPageUpdate(response.index, response)
      setResponse({ index: props.step })
    } else {
      setResponse({index: props.step})
    }
  }, [props.step]);

  const updateResponses = (value, category) => {
    setResponse({...response, [category] : value})
  }

  if (props.step === 6) {
    return <div>{props.pageResponses[6]?.emailPreview || "Loading preview..."}</div>;
  }
  return (
    <div className="text-left">
      {
        props.list[props.step - 1].items?.map((item, index) => {
          return (
            <FormItem key={item.label} item={item} onChange={updateResponses} response={props.pageResponses[props.step] ? props.pageResponses[props.step][item.value] : null}/>
          )
        })
      }
    </div>
  );
}

export default QuoteRequestForm;