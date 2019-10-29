import React from "react";
import { render } from "react-dom";
import { Formik, FieldArray } from "formik";

console.clear();

const categories = [
  { id: "movies", name: "Movies" },
  { id: "music", name: "Music" },
  { id: "videoGames", name: "Video Games" }
];

export const FormExample = () => (
  <div>
    <Formik
      initialValues={{ categoryIds: ["movies"] }}
      onSubmit={values =>
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500)
      }
      render={({ values }) => (
        <div>
          <FieldArray
            name="categoryIds"
            render={arrayHelpers => (
              <div>
                {categories.map(category => (
                  <div key={category.id}>
                    <label>
                      <input
                        name="categoryIds"
                        type="checkbox"
                        value={category.id}
                        checked={values.categoryIds.includes(category.id)}
                        onChange={e => {
                          if (e.target.checked) arrayHelpers.push(category.id);
                          else {
                            const idx = values.categoryIds.indexOf(category.id);
                            arrayHelpers.remove(idx);
                          }
                        }}
                      />{" "}
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
            )}
          />
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </div>
      )}
    />
  </div>
);

const App = () => (
  <div>
    <FormExample />
  </div>
);

render(<App />, document.getElementById("root"));
