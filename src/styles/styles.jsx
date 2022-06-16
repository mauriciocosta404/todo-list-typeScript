import styled  from 'styled-components';

export const Container=styled.div`
    margin-top:7rem ;

    h2{
        text-align: center;
        color: seagreen;
    }
    input[type="text"]{
        border: none;
        margin: 2rem;
        display: block;
        box-shadow: 0px 0px 2rem rgba(0,0,0,0.2);
        padding: 1rem 5rem;
        text-align: left;
    }
    button{
        border: none;
        margin: 2rem;
        display: block;
        background-color: seagreen;
        padding: 1rem 7.5rem;
        text-align: left;
        color:#fff;
        border-radius:.2rem;
        cursor: pointer;
        }
    ul{
        list-style-type: none;
    }
    li{
        border: none;
        border-radius:.2rem;
        margin: 2rem;
        display: flex;
        justify-content: space-between;
        height: 3rem;
        align-items: center;
        box-shadow: 0px 0px 2rem rgba(0,0,0,0.2);
        text-align: left;
        padding: 0 .5rem 0 0;
    }
    span{
        background-color: seagreen;
        width:2rem;
        height: 100%;
        border-radius: 0 0.3rem 0.3rem 0;
    }
    
`;