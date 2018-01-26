import React, { Component } from "react";
import "../styles/skills-form.css";

class SkillsForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {

      disciplines: [
        { label: "Design Research", checked: false, id: "desresearch" }, 
        { label: "Visual Design", checked: false, id: "visdesign" }, 
        { label: "UX Design", checked: false, id: "uxdesign" }, 
        { label: "Front-end Dev", checked: false, id: "frontenddev" }
      ],

      skills: [
        { label: "Visual Design", checked: false, id: "visualdes" }, 
        { label: "UX Design", checked: false, id: "uxdes" }, 
        { label: "Front-end Development", checked: false, id: "frontdev" }
      ],

      locations: [
        { label: "Austin, Texas", checked: false, id: "texas" }, 
        { label: "New York, New York", checked: false, id: "newyork" }, 
        { label: "Toronto, Canada", checked: false, id: "canada" }, 
        { label: "Shanghai, China", checked: false, id: "china" }, 
        { label: "Dublin, Ireland", checked: false, id: "ireland" }, 
        { label: "Hursley, United Kingdom", checked: false, id: "uk" }, 
        { label: "Boeblingen, Germany", checked: false, id: "germany" }, 
        { label: "Somewhere else", checked: false, id: "somewhere" }
      ] 
    };
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
  };

  render() {
    const disciplineInputs = this.state.disciplines.map((disciplineOpt, i) => ( <div key={i}>
          <input
            type="radio"
            name="disciplines"
            id={disciplineOpt.id}
            checked={disciplineOpt.checked}
            onChange={() => {
              const newDisciplines = this.state.disciplines.map(
                (newObj, newIndex) => {
                  return i === newIndex
                    ? { ...newObj, checked: true }
                    : { ...newObj, checked: false };
                }
              );

              this.setState({ disciplines: newDisciplines });
            }}
          />
          <label className="skill" htmlFor={disciplineOpt.id}>
            {disciplineOpt.label}
          </label>
        </div>
      )
    );    

    const skillsInputs = this.state.skills.map((skillOpt, i) => (
      <div key={i}>
        <input
          type="checkbox"
          id={skillOpt.id}
          checked={
            this.state.skills.find(skill => skill.label === skillOpt.label)
              .checked
          }
          onChange={() => {
            const selectedSkillIndex = this.state.skills.findIndex(
              skill => skill.label === skillOpt.label
            );
            const selectedSkill = this.state.skills[selectedSkillIndex];
            const newSkill = {
              ...selectedSkill,
              checked: !selectedSkill.checked
            };
            const newSkillsArr = [
              ...this.state.skills.slice(0, selectedSkillIndex),
              newSkill,
              ...this.state.skills.slice(selectedSkillIndex + 1)
            ];

            this.setState({
              skills: newSkillsArr
            });
          }}
        />
        <label htmlFor={skillOpt.id}>{skillOpt.label}</label>
      </div>
    ));

    const locationInputs = this.state.locations.map((skillOpt, i) => (
      <div key={i}>
        <input
          type="checkbox"
          id={skillOpt.id}
          checked={
            this.state.locations.find(
              skill => skill.label === skillOpt.label
            ).checked
          }
          onChange={() => {
            const selectedSkillIndex = this.state.locations.findIndex(skill => skill.label === skillOpt.label);
            const selectedSkill = this.state.locations[selectedSkillIndex];
            const newSkill = {
              ...selectedSkill,
              checked: !selectedSkill.checked
            };
            const newSkillsArr = [...this.state.locations.slice(0, selectedSkillIndex), newSkill, ...this.state.locations.slice(selectedSkillIndex + 1)];

            this.setState({ locations: newSkillsArr });
          }}
        />
        <label htmlFor={skillOpt.id}>{skillOpt.label}</label>
      </div>
    ));

    return (
    <form onSubmit={this.handleFormSubmit}>
        <p>2. Skills and location</p>
        <hr />
        <p>Which is your primary design discipline?</p>

        <div className="primaryskill">{disciplineInputs}</div>

        <div className="experience">
          <div id="discipline">
            <p>Do you have experience with any other disciplines?</p>
              {skillsInputs}
          </div>

          <div id="working">
            <p>Where are you interested in working?</p>
            <p>
              You must be legally authorized to work without visa
              sponsorship in the location you choose.
            </p>
            {locationInputs}
          </div>
        </div>

        <button type="submit" value="Submit" className="submitBtn" id="confirm">          
          Submit
        </button>
    </form>
    );
  }
}

export default SkillsForm;
