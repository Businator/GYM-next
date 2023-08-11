import { sortingByTime } from "'@/utils/sortingByTime'";
import trainingSchedule from "../mocks/trainingSchedule.json";

class TableApi {
  getDays() {
    return trainingSchedule.map((element) => element.dayOfWeek);
  }

  getTimes() {
    const listOfSelectedHours = trainingSchedule
      .map((element) =>
        element.dailySchedule.map((dayOfWeek) => dayOfWeek.time)
      )
      .flat(2)
      .reduce(
        (result, time) => (result.includes(time) ? result : [...result, time]),
        [] as string[]
      );
    return sortingByTime(listOfSelectedHours);
  }

  getWorkout() {
    const trainingList = trainingSchedule.map(
      (element) => element.dailySchedule
    );

    return trainingList;
  }
}

export const workWithTableApi = new TableApi();
