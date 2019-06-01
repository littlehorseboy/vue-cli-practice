import Vue from 'vue';

Vue.filter('currency', num => `$ ${num.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1, ')}`);

Vue.filter('lowercase', str => str.toLowerCase());

// Letter Grade & GPA
function letterGrade(score) {
  if (score > 100 || score < 0) {
    return '--';
  } else if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  }
  return 'E';
}

Vue.filter('letterGrade', letterGrade);

Vue.filter('gpa', (score) => {
  // eslint-disable-next-line no-underscore-dangle
  const gpaScore = letterGrade(score);
  const gpa = {
    A: '4.0',
    B: '3.0',
    C: '2.0',
    D: '1.0',
    E: '0.0',
  };

  return gpa[gpaScore] || gpaScore;
});
