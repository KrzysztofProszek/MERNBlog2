export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://images.pexels.com/photos/8721339/pexels-photo-8721339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>
          lorm ipsum lorm ipsum lorm ipsum lorm ipsum lorm ipsum lorm ipsum lorm
          ipsum lorm ipsum lorm ipsum{' '}
        </h2>
        <p className="info">
          <a className="author">Krzysztof Proszek</a>
          <time>2023-10-25 21:13</time>
        </p>
        <p className="summary">
          lorm ipsum lorm ipsum lorm ipsum lorm ipsum lorm ipsum lorm ipsum lorm
          ipsum lorm ipsum lorm ipsum lorm ipsum PPP
        </p>
      </div>
    </div>
  )
}
