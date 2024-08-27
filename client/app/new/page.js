export default function Page() {
  return (
    <>
      <h3>Create New User</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Name of the person: </label>
          <input
            type="text"
            className="form-control"
            value={this.state.name}
            onChange={this.onChangePersonName}
          />
        </div>
        <div className="form-group">
          <label>Person's position: </label>
          <input
            type="text"
            className="form-control"
            value={this.state.position}
            onChange={this.onChangePersonPosition}
          />
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityLow"
              value="Intern"
              checked={this.state.level === "Intern"}
              onChange={this.onChangePersonLevel}
            />
            <label className="form-check-label">Intern</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityMedium"
              value="Junior"
              checked={this.state.level === "Junior"}
              onChange={this.onChangePersonLevel}
            />
            <label className="form-check-label">Junior</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="priorityOptions"
              id="priorityHigh"
              value="Senior"
              checked={this.state.level === "Senior"}
              onChange={this.onChangePersonLevel}
            />
            <label className="form-check-label">Senior</label>
          </div>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create person"
            className="btn btn-primary"
          />
        </div>
      </form>
    </>
  );
}
