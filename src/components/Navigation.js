import React from "react";

const isCurrent = (anchor, pathname) => (
  pathname.endsWith(anchor)
  ? 'current'
  : ''
)
class Navigation extends React.Component {
  state = {
    pathname: '#home'
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({pathname: window.location.href});
    })
  }
  render() {
    const { pathname = '' } = this.state
    return (
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" />
      <ul id="nav" className="nav">
        <li className={isCurrent('#home', pathname)}>
          <a className="smoothscroll" href="#home">
            トップページ
          </a>
        </li>
        <li className={isCurrent('#about', pathname)}>
          <a className="smoothscroll" href="#about">
            一向一揆まつりとは
          </a>
        </li>
        <li className={isCurrent('#news', pathname)}>
          <a className="smoothscroll" href="#news">
            お知らせ
          </a>
        </li>
        <li className={isCurrent('#detail', pathname)}>
          <a className="smoothscroll" href="#detail">
            詳細・アクセス
          </a>
        </li>
        <li className={isCurrent('#image', pathname)}>
          <a className="smoothscroll" href="#image">
            ギャラリー
          </a>
        </li>
      </ul>
    </nav>
  )}
};

export default Navigation;
