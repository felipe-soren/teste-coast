// import { useState, useEffect } from "react";
import models from "../../Resources/data/models.json";

export default function useModel() {
  async function allModels() {
    return models;
  }

  async function recentUploadedModels() {
    return models.slice(0, 5);
  }

  function paginate(arr, perpage, page) {
    return arr.slice(perpage * (page - 1), perpage * page);
  }

  function paginateModels(models, page) {
    const modelsPaginated = paginate(models, 5, page);

    return { modelsPaginated };
  }

  return { allModels, recentUploadedModels, paginateModels };
}
