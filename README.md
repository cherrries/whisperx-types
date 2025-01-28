# whisperx-types

TypeScript type definitions for WhisperX CLI options and transcript output.

## About

These type definitions are based on [cherrries/whisperX](https://github.com/cherrries/whisperX), which tracks the latest version of faster-whisper. This means these types support more models than the original [m-bain/whisperX](https://github.com/m-bain/whisperX) repository.

### Supported Models
- `tiny.en`
- `tiny`
- `base.en`
- `base`
- `small.en`
- `small`
- `medium.en`
- `medium`
- `large-v1`
- `large-v2`
- `large-v3`
- `large`
- `distil-large-v2`
- `distil-medium.en`
- `distil-small.en`
- `distil-large-v3`
- `large-v3-turbo`
- `turbo`

## Installation

Using git:
```bash
npm install git+https://github.com/cherrries/whisperx-types.git
```

## Usage

### CLI Options

```typescript
import { WhisperXOptions } from 'whisperx-types';

const options: WhisperXOptions = {
  model: 'small',
  language: 'en',
  diarize: true,
  output_format: 'json'
};
```

### Transcript Types

```typescript
import { WhisperXTranscript } from 'whisperx-types';

// Parse WhisperX JSON output
const transcript: WhisperXTranscript = JSON.parse(whisperXOutput);

// Access transcript data with full type safety
transcript.segments.forEach(segment => {
  console.log(`[${segment.start} -> ${segment.end}] ${segment.text}`);
  
  segment.words?.forEach(word => {
    console.log(`Word: ${word.word}, Score: ${word.score}`);
  });
});
```

## Type Definitions

### CLI Options (`WhisperXOptions`)

#### Core Options
- `model`: Name of the Whisper model to use (default: small)
- `model_dir`: Path to save model files (default: ~/.cache/whisper)
- `device`: Device to use for PyTorch inference (default: cpu)
- `device_index`: Device index for FasterWhisper inference (default: 0)
- `batch_size`: Preferred batch size for inference (default: 8)
- `compute_type`: Compute type for computation (float16, float32, int8) (default: float16)

#### Output Options
- `output_dir`: Directory to save the outputs (default: .)
- `output_format`: Format of the output file (all, srt, vtt, txt, tsv, json, aud)
- `verbose`: Whether to print progress and debug messages (default: true)
- `print_progress`: Print progress in transcribe() and align() methods

#### Language & Task Options
- `task`: Whether to perform transcription ('transcribe') or translation ('translate')
- `language`: Language spoken in the audio (supports both codes like 'en' and full names like 'English')

#### Alignment Options
- `align_model`: Name of phoneme-level ASR model for alignment
- `interpolate_method`: Method for non-aligned words (nearest, linear, ignore)
- `no_align`: Disable phoneme alignment
- `return_char_alignments`: Return character-level alignments in JSON

#### VAD & Diarization
- `vad_onset`: Onset threshold for VAD (reduce if speech not detected)
- `vad_offset`: Offset threshold for VAD
- `chunk_size`: Chunk size for merging VAD segments (default: 30)
- `diarize`: Enable speaker diarization
- `min_speakers`: Minimum number of speakers
- `max_speakers`: Maximum number of speakers

#### Model Parameters
- `temperature`: Temperature for sampling
- `best_of`: Number of candidates when sampling with non-zero temperature
- `beam_size`: Number of beams in beam search (when temperature is zero)
- `patience`: Beam decoding patience value
- `length_penalty`: Token length penalty coefficient
- `suppress_tokens`: Token IDs to suppress during sampling
- `suppress_numerals`: Suppress numeric and currency symbols
- `initial_prompt`: Text prompt for first window
- `condition_on_previous_text`: Use previous output as prompt

#### Advanced Options
- `fp16`: Perform inference in fp16 (default: true)
- `temperature_increment_on_fallback`: Temperature increase on decoding failure
- `compression_ratio_threshold`: Gzip compression ratio threshold
- `logprob_threshold`: Average log probability threshold
- `no_speech_threshold`: No speech token probability threshold
- `threads`: Number of CPU inference threads

#### Formatting Options (require alignment)
- `max_line_width`: Maximum characters per line
- `max_line_count`: Maximum lines per segment
- `highlight_words`: Underline words as spoken in srt/vtt
- `segment_resolution`: Line breaking resolution (sentence, chunk)

### Transcript Types

#### `WhisperXTranscript`
```typescript
interface WhisperXTranscript {
  segments: WhisperXSegment[];      // Array of transcribed segments
  word_segments?: WhisperXWord[];   // Flattened array of all words
  language: string;                 // Detected/specified language
}
```

#### `WhisperXSegment`
```typescript
interface WhisperXSegment {
  start: number;      // Start time (seconds with millisecond precision, e.g., 1.234)
  end: number;        // End time (seconds with millisecond precision)
  text: string;       // Transcribed text
  words?: WhisperXWord[]; // Word-level details (when alignment enabled)
  speaker?: string;   // Speaker label (when diarization enabled)
}
```

#### `WhisperXWord`
```typescript
interface WhisperXWord {
  word: string;       // Transcribed word
  start: number;      // Start time (seconds with millisecond precision)
  end: number;        // End time (seconds with millisecond precision)
  score: number;      // Confidence score (0.0 to 1.0)
  speaker?: string;   // Speaker label (when diarization enabled)
}
```

