import { Form, Field, Formik } from 'formik';
import useWater from 'hooks/useWaters';
import * as Yup from 'yup';

function WaterCalculator() {
  const { addDailyNorma } = useWater();

  const calculateWater = (formData) => {
    const { gender, weight, activityHours } = formData;
    if (gender && weight && activityHours) {
      if (gender === 'man') {
        return parseFloat(weight) * 0.04 + parseFloat(activityHours) * 0.6;
      } else if (gender === 'woman') {
        return parseFloat(weight) * 0.03 + parseFloat(activityHours) * 0.4;
      }
    }
    return null;
  };

  return (
    <div>
      <h2>My daily norma</h2>
      <Formik
        initialValues={{
          gender: 'man',
          weight: '',
          activityHours: '',
        }}
        validationSchema={Yup.object().shape({
          gender: Yup.string().required('Gender is required'),
          weight: Yup.number()
            .required('Weight is required')
            .positive()
            .integer(),
          activityHours: Yup.number()
            .required('Activity hours is required')
            .positive()
            .integer(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const waterIntake = calculateWater(values);
          addDailyNorma({ waterIntake });
          console.log('Form data:', { ...values, waterIntake });
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors, touched, values, setFieldValue }) => (
          <Form>
            <div>
              <p>For girl: V=(M*0,03) + (T*0,4)</p>
              <p>For man: V=(M*0,04) + (T*0,6)</p>
            </div>
            <span>
              * V is the volume of the water norm in liters per day, M is your
              body weight, T is the time of active sports, or another type of
              activity commensurate in terms of loads (in the absence of these,
              you must set 0)
            </span>
            <div>
              <p>Calculate your rate:</p>
              <label>
                <Field
                  type="radio"
                  name="gender"
                  value="man"
                  onChange={() => setFieldValue('gender', 'man')}
                />
                From man
              </label>
              <label>
                <Field
                  type="radio"
                  name="gender"
                  value="woman"
                  onChange={() => setFieldValue('gender', 'woman')}
                />
                From woman
              </label>
              {errors.gender && touched.gender && <div>{errors.gender}</div>}
            </div>

            <div>
              <label>
                Your weight in kilograms:
                <Field type="number" name="weight" />
                {errors.weight && touched.weight && <div>{errors.weight}</div>}
              </label>
            </div>

            <div>
              <label>
                The time of active participation in sports or other activities
                with a high physical. load in hours:
                <Field type="number" name="activityHours" />
                {errors.activityHours && touched.activityHours && (
                  <div>{errors.activityHours}</div>
                )}
              </label>
            </div>

            <p>
              Your recommended water intake per day is:
              {calculateWater(values)
                ? parseFloat(calculateWater(values)).toFixed(2)
                : 0}
              liters
            </p>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default WaterCalculator;
