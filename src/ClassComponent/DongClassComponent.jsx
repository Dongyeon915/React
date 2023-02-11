import React from "react";
import styles from "./DongClassComponent.module.css"

class DongClassComponent extends React.Component {

  state = {
    user: 0,
    count: 0
  }

  render() {
    return (
        <div>
          {/*props를 매개변수로 받지않아도 this로 들어온건 사용가능*/}
          <h3 className={styles.h3}>{this.props.name}</h3>
          <div className={styles.userDiv}>
            <h2>유저: {this.state.user}</h2>
            <button onClick={(this.eachPlus)}> user</button>
            <button onClick={this.minus}>user감소</button>
          </div>
          <div className={styles.countDiv}>
            <h2>카운트: {this.state.count}</h2>
            <button onClick={(this.eachPlus)}>count</button>
            <button onClick={this.minus}>count감소</button>
          </div>
          <div>
            <button className={styles.doubleBtn}
                    onClick={this.doublePlus}>두가지증가
            </button>
          </div>
        </div>
    )
  }

  plusUser = (e) => {
    this.setState(prevState => {
      console.log(e.target.innerText)
      alert("user증가 버튼 클릭")
      return {
        ...prevState,
        user: prevState.user + 1
      }
    })
  }

  plusCount = (e) => {
    this.setState(prevState => {
      console.log(e.target.innerText)
      alert("count증가 버튼 클릭")
      return {
        ...prevState,
        count: prevState.count + 1
      }
    })
  }

  // 두가지를 모두 증가 시키는 이벤트
  doublePlus = (e) => {
    this.setState(beforeStata => {
      alert("두가지를 동시증가")
      return {
        ...beforeStata,
        user: beforeStata.user + 1,
        count: beforeStata.count + 1
      }
    })
  }

  //  두가지를 판단해서 증가시키는 메소드
  eachPlus = (e) => {
    if (e.target.innerText === "user") {
      this.setState((before) => {
        alert("user를 증가 시켰습니다.")
        return {
          ...before,
          user: before.user + 1
        }
      })
    } else {
      this.setState((befor) => {
        alert("cont를 증가 시켰습니다.")
        return {
          ...befor,
          count: befor.count + 1
        }
      })
    }
  }

//  숫자를 줄이기
  minus = (e) => {
    if(e.target.innerText === "user감소"){
      alert("유저를 감소 시킵니다.")
      this.setState((befor) => {
        return {
          ...befor,
          user : befor.user - 1
        }
      })
    }else{
      this.setState((before) => {
        alert("count를 감소 시킵니다.")
        return {
          ...before,
          count : before.count -1
        }
      })
    }
  }
}

export default DongClassComponent;