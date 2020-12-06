import React from "react";
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "Noname", age : 3 }
  ];
  return (
    <>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index}/>;
      })}
    </>
  );
};

const User = (props) => {
  return (
    <div>
      Hi, I am {props.name}, and {props.age}years old!
    </div>
  );
};
// propsの型の定義を決める
User.propTypes = {
  name: PropTypes.string,//ココがnameがstring(文字列)
  age: PropTypes.number.isRequired//ココはageがnumber(数字)isRequiredで必須項目になる
}
export default App;
