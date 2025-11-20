import { useState } from 'react';
import 'sarvora-base-ui/styles';
import {
  Button,
  Input,
  Card,
  Alert,
  Badge,
  Switch,
  Checkbox,
  RadioGroup,
  Select,
  Slider,
  Avatar,
  Chip,
  Tag,
  Spinner,
  ProgressBar,
  Divider,
} from 'sarvora-base-ui';
import './App.css';

function App() {
  const [switchOn, setSwitchOn] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');
  const [selectValue, setSelectValue] = useState('');
  const [sliderValue, setSliderValue] = useState(50);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Sarvora Base UI - Component Showcase</h1>
        <p>A comprehensive React component library</p>
      </header>

      <main className="app-content">
        {/* Alerts Section */}
        <section className="section">
          <h2>Alerts & Feedback</h2>
          <div className="component-grid">
            <Alert variant="info" title="Information">
              This is an informational alert message.
            </Alert>
            <Alert variant="success" title="Success">
              Your changes have been saved successfully!
            </Alert>
            <Alert variant="warning" title="Warning">
              Please review your settings before proceeding.
            </Alert>
            <Alert variant="error" title="Error">
              An error occurred while processing your request.
            </Alert>
          </div>
        </section>

        <Divider />

        {/* Buttons Section */}
        <section className="section">
          <h2>Buttons</h2>
          <div className="component-row">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="danger">Danger Button</Button>
            <Button disabled>Disabled Button</Button>
          </div>
          <div className="component-row">
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </div>
        </section>

        <Divider />

        {/* Form Inputs Section */}
        <section className="section">
          <h2>Form Inputs</h2>
          <div className="form-grid">
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              helperText="We'll never share your email"
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
            <Select
              label="Country"
              value={selectValue}
              onChange={(value) => setSelectValue(value)}
              options={[
                { value: 'us', label: 'United States' },
                { value: 'uk', label: 'United Kingdom' },
                { value: 'ca', label: 'Canada' },
              ]}
            />
          </div>

          <div className="component-row">
            <Checkbox
              checked={checkboxChecked}
              onChange={(e) => setCheckboxChecked(e.target.checked)}
              label="I agree to the terms and conditions"
            />
          </div>

          <div className="component-row">
            <Switch
              checked={switchOn}
              onChange={(checked) => setSwitchOn(checked)}
              label="Enable notifications"
            />
          </div>

          <div className="radio-group-section">
            <RadioGroup
              name="options"
              value={radioValue}
              onChange={setRadioValue}
              options={[
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' },
                { value: 'option3', label: 'Option 3' },
              ]}
            />
          </div>

          <div className="slider-container">
            <label>Slider Value: {sliderValue}</label>
            <Slider
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              min={0}
              max={100}
            />
          </div>
        </section>

        <Divider />

        {/* Cards Section */}
        <section className="section">
          <h2>Cards</h2>
          <div className="card-grid">
            <Card variant="elevated" header="Elevated Card">
              <p>This is an elevated card with shadow effect.</p>
            </Card>
            <Card variant="outlined" header="Outlined Card">
              <p>This is an outlined card with border.</p>
            </Card>
            <Card
              header="Card with Footer"
              footer={<Button variant="primary">Learn More</Button>}
            >
              <p>This card has a footer with an action button.</p>
            </Card>
          </div>
        </section>

        <Divider />

        {/* Badges & Tags Section */}
        <section className="section">
          <h2>Badges, Tags & Chips</h2>
          <div className="component-row">
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
          </div>
          <div className="component-row">
            <Tag variant="primary">Tag 1</Tag>
            <Tag variant="danger">Tag 2</Tag>
            <Tag variant="primary">Tag 3</Tag>
          </div>
          <div className="component-row">
            <Chip>Default Chip</Chip>
            <Chip onClick={() => alert('Clicked!')}>Clickable Chip</Chip>
            <Chip onDelete={() => alert('Deleted!')}>Deletable Chip</Chip>
          </div>
        </section>

        <Divider />

        {/* Avatar Section */}
        <section className="section">
          <h2>Avatars</h2>
          <div className="component-row">
            <Avatar initials="JD" size="small" />
            <Avatar initials="JS" size="medium" />
            <Avatar initials="BJ" size="large" />
          </div>
        </section>

        <Divider />

        {/* Progress Section */}
        <section className="section">
          <h2>Progress Indicators</h2>
          <div className="component-col">
            <ProgressBar percent={25} variant="primary" showPercent />
            <ProgressBar percent={50} variant="success" showPercent />
            <ProgressBar percent={75} variant="warning" showPercent />
          </div>
          <div className="component-row">
            <Spinner size="small" />
            <Spinner size="medium" />
            <Spinner size="large" />
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>Built with Sarvora Base UI • A modern React component library</p>
      </footer>
    </div>
  );
}

export default App;
