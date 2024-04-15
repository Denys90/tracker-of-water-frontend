import { Form, Field, Formik } from 'formik';
import useWater from 'hooks/useWaters';

import {
  FormField,
  ModalButtonSave,
  ModalCalcTitle,
  ModalCalculate,
  ModalCalculateWater,
  ModalContainerInput,
  ModalFormula,
  ModalFormulaContainer,
  ModalFormulaSpan,
  ModalFormulaText,
  ModalLabel,
  ModalLabelText,
  ModalRadioContainer,
  ModalTextNote,
  ModalTextStar,
  ModalTitle,
  ModalWriteWater,
} from './DailyNormaForm.styled';

function WaterCalculator({ toggleModal }) {
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

  const initialValues = {
    gender: 'man',
    weight: '',
    activityHours: '',
    dailyNorma: '',
  };

  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const year = String(currentDate.getFullYear());

  const formattedDate = `${day}.${month}.${year}`;

  return (
    <ModalCalculateWater>
      <ModalTitle>My daily norma</ModalTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          const dailyNorma = values.dailyNorma * 1000;
          const date = {
            daily_limit: dailyNorma,
            date: formattedDate,
          };

          addDailyNorma(date);

          toggleModal();
        }}
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form>
            <ModalFormulaContainer>
              <ModalFormula>
                For girl:{' '}
                <ModalFormulaSpan>V=(M*0,03) + (T*0,4)</ModalFormulaSpan>
              </ModalFormula>
              <ModalFormula>
                For man:{' '}
                <ModalFormulaSpan>V=(M*0,04) + (T*0,6)</ModalFormulaSpan>
              </ModalFormula>
            </ModalFormulaContainer>
            <ModalFormulaText>
              <ModalTextNote>
                <ModalTextStar>* </ModalTextStar>V is the volume of the water
                norm in liters per day, M is your body weight, T is the time of
                active sports, or another type of activity commensurate in terms
                of loads (in the absence of these, you must set 0)
              </ModalTextNote>
            </ModalFormulaText>
            <ModalCalculate>
              <ModalCalcTitle>Calculate your rate:</ModalCalcTitle>
              <ModalRadioContainer>
                <label>
                  <Field
                    type="radio"
                    name="gender"
                    value="man"
                    onChange={() => setFieldValue('gender', 'man')}
                  />
                  For man
                </label>
                <label>
                  <Field
                    type="radio"
                    name="gender"
                    value="woman"
                    onChange={() => setFieldValue('gender', 'woman')}
                  />
                  For woman
                </label>
              </ModalRadioContainer>
              {errors.gender && touched.gender && <div>{touched.gender}</div>}
            </ModalCalculate>
            <ModalContainerInput>
              <ModalLabel>
                <ModalLabelText>Your weight in kilograms:</ModalLabelText>
                <FormField type="number" name="weight" placeholder="0" />
                {errors.weight && touched.weight && <div>{errors.weight}</div>}
              </ModalLabel>
            </ModalContainerInput>
            <ModalContainerInput>
              <ModalLabelText>
                {' '}
                The time of active participation in sports or other activities
                with a high physical. load in hours:
              </ModalLabelText>
              <ModalLabel>
                <FormField type="number" name="activityHours" placeholder="0" />
                {errors.activityHours && touched.activityHours && (
                  <div>{errors.activityHours}</div>
                )}
              </ModalLabel>
            </ModalContainerInput>
            <ModalWriteWater>
              Your recommended water intake per day is:
              <span>
                {calculateWater(values)
                  ? parseFloat(calculateWater(values)).toFixed(2)
                  : 0}
                L
              </span>
            </ModalWriteWater>
            <ModalLabelText>
              Write down how much water you will drink:
            </ModalLabelText>
            <ModalLabel>
              <FormField type="number" name="dailyNorma" placeholder="0" />
            </ModalLabel>

            <ModalButtonSave type="submit">Save</ModalButtonSave>
          </Form>
        )}
      </Formik>
    </ModalCalculateWater>
  );
}

export default WaterCalculator;
