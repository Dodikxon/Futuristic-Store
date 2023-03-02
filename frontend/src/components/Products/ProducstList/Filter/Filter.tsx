import React from 'react';
import Selector from "../../../Inputs/Selector";
import Submit from "../../../Inputs/Submit";
import './Filter.scss';

const Filter = (props: any) => {
    return (
        <div className="filter">
            <Selector value1={'Dota 2'} value={'select game'}
                      name={'game'}
                      change={props.setGame}
                      selectorValue={props.game}
                      value2={'LOL'}/>
            <Submit value={props.isSubmit}
                    change={props.setIsSubmit}
                    action={props.fetchProductByGame}
                    email={props.game}/>
        </div>
    );
};

export default Filter;