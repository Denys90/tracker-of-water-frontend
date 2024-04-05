import { Form, Field, Formik } from 'formik';
import useWater from 'hooks/useWaters';
// import * as Yup from 'yup';

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
import useUsers from 'hooks/useUsers';
import { useEffect } from 'react';

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
  const { signUp } = useUsers();

  useEffect(() => {
    const data = {
      email: 'DM5@mail.com',
      password: 'qwe123qwe5',
    };
    signUp(data);
  }, [signUp]);

  return (
    <ModalCalculateWater>
      <ModalTitle>My daily norma</ModalTitle>
      <Formik
        initialValues={{
          gender: 'man',
          weight: '',
          activityHours: '',
        }}
        // validationSchema={Yup.object().shape({
        //   gender: Yup.string().required('Gender is required'),
        //   weight: Yup.number()
        //     .required('Weight is required')
        //     .positive()
        //     .integer(),
        //   activityHours: Yup.number()
        //     .required('Activity hours is required')
        //     .positive()
        //     .integer(),
        // })}
        onSubmit={(values, { setSubmitting }) => {
          const waterIntake = calculateWater(values);
          addDailyNorma({ waterIntake });
          console.log('Form data:', { ...values, waterIntake });
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, errors, touched, values, setFieldValue }) => (
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
              {errors.gender && touched.gender && <div>{errors.gender}</div>}
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
              <FormField type="number" name="Iwilldrunk" placeholder="0" />
            </ModalLabel>

            <ModalButtonSave type="submit" disabled={isSubmitting}>
              Save
            </ModalButtonSave>
          </Form>
        )}
      </Formik>
    </ModalCalculateWater>
  );
}

export default WaterCalculator;
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
