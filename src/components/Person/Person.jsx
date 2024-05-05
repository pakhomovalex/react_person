import classNames from 'classnames';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    <p className={classNames('', { Person__age: person.age })}>
      {person.age ? <p>I am {person.age}</p> : <></>}
    </p>
    <p className={classNames('', { Person__partner: person.partnerName })}>
      {person.isMarried === true ? (
        <p>
          {person.partnerName} is my
          {person.sex === 'm' ? ' wife' : ' husband'}
        </p>
      ) : (
        <p>I am not married</p>
      )}
    </p>
  </section>
);
