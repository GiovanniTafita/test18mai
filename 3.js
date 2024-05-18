function pairProgramming(experiences, mostExperienced = true) {
  const exp = experiences;
  sortedExp = experiences.toSorted();
  console.log(sortedExp);
  if (mostExperienced) {
    result = [exp.indexOf(sortedExp[sortedExp.length - 2]),
    exp.indexOf(sortedExp[sortedExp.length - 1])];

    return result;
  }
  result = [exp.indexOf(sortedExp[0]), exp.indexOf(sortedExp[1])];
  return result;
}